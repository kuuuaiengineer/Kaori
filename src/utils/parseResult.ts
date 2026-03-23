import { getFragranceForText, type FragranceItem } from '../data/fragranceData';

export interface ParsedFragrance {
  text: string;
  fragrance: FragranceItem;
  isSummary: boolean; // まとめ・挨拶文はカードにしない
}

export interface ParseResult {
  cards: ParsedFragrance[];
  closingMessage?: string;
}

/** しめの文のキーワード（全カード共通の締めくくりによく使われる語） */
const CLOSING_KEYWORDS = /迎えられますように|過ごせますように|お楽しみください|お過ごしください/;

/**
 * ブロック末尾の1行・1文がしめの文なら抽出する（本文を壊さないよう慎重に）
 */
function extractClosingMessage(text: string): { main: string; closing?: string } {
  const trimmed = text.trimEnd();
  const lastNewline = trimmed.lastIndexOf('\n');
  const lastLine = lastNewline >= 0 ? trimmed.slice(lastNewline + 1) : trimmed;

  if (
    lastLine.length >= 10 &&
    lastLine.length <= 80 &&
    CLOSING_KEYWORDS.test(lastLine) &&
    /[。！]$/.test(lastLine.replace(/[」』]$/, ''))
  ) {
    const main = (lastNewline >= 0 ? trimmed.slice(0, lastNewline) : '').replace(/\n{2,}$/, '\n').trim();
    return { main, closing: lastLine };
  }
  return { main: text };
}

/**
 * 番号付きの香り提案（1. ラベンダー、2. ペパーミント等）かどうか
 */
function isFragranceRecommendation(text: string): boolean {
  return /^\d+[\.．)\s]|^[①②③]|^\d+\.\s*\*?\*?[^\s*]+\*?\*?\s*/.test(text.trim()) ||
    /\*\*[^\*]+\*\*/.test(text); // **香り名** を含む
}

/**
 * Difyからの提案テキストをブロックに分割し、各ブロックに香り情報を紐づける
 * 最後のカード内にあるしめの文は抽出して closingMessage として返す
 */
export function parseResultToCards(result: string): ParseResult {
  // 番号付きリスト（1. 2. 3. や ① ②）で分割
  const numberedBlocks = result.split(/\n(?=\d+[\.．)\s]|①|②|③)/);
  
  // または ・ で始まる行で分割
  const bulletBlocks = result.split(/\n(?=・|◆|●)/);
  
  // 分割数が少ない場合は改行2つで分割
  const doubleNewlineBlocks = result.split(/\n\n+/);
  
  let blocks: string[] = [];
  if (numberedBlocks.length >= 2) {
    blocks = numberedBlocks.map((b) => b.trim()).filter(Boolean);
  } else if (bulletBlocks.length >= 2) {
    blocks = bulletBlocks.map((b) => b.trim()).filter(Boolean);
  } else if (doubleNewlineBlocks.length >= 2) {
    blocks = doubleNewlineBlocks.map((b) => b.trim()).filter(Boolean);
  } else {
    blocks = [result.trim()].filter(Boolean);
  }

  const cards: ParsedFragrance[] = [];
  let closingMessage: string | undefined;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const isSummary = !isFragranceRecommendation(block);
    const isLastFragrance =
      !isSummary &&
      !blocks.slice(i + 1).some((b) => isFragranceRecommendation(b));

    let text = block;
    if (isLastFragrance) {
      const { main, closing } = extractClosingMessage(block);
      text = main;
      if (closing) closingMessage = closing;
    }

    cards.push({
      text,
      fragrance: getFragranceForText(text),
      isSummary,
    });
  }

  return { cards, closingMessage };
}
