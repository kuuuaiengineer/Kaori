import { useState } from 'react';
import TopScreen from './components/TopScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { FormData, Screen, Category } from './types';
import { submitToDify } from './services/difyApi';

function App() {
  const [screen, setScreen] = useState<Screen>('top');
  const [formData, setFormData] = useState<FormData>({
    category: null,
    mood: [],
    mood_free: '',
    scene: [],
    scene_free: '',
    preference: [],
    preference_free: '',
  });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelectCategory = (category: Category) => {
    setFormData({ ...formData, category });
    setScreen('question');
  };

  const handleUpdateFormData = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setScreen('result');

    try {
      const response = await submitToDify(formData);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期しないエラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setScreen('top');
    setFormData({
      category: null,
      mood: [],
      mood_free: '',
      scene: [],
      scene_free: '',
      preference: [],
      preference_free: '',
    });
    setResult(null);
    setError(null);
  };

  const handleBack = () => {
    setScreen('top');
  };

  return (
    <>
      {screen === 'top' && <TopScreen onSelectCategory={handleSelectCategory} />}
      {screen === 'question' && (
        <QuestionScreen
          formData={formData}
          onUpdateFormData={handleUpdateFormData}
          onSubmit={handleSubmit}
          onBack={handleBack}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          result={result}
          loading={loading}
          error={error}
          onReset={handleReset}
        />
      )}
    </>
  );
}

export default App;
