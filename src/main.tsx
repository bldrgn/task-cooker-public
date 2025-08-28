import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import '@/ui/index.css';
import App from './App';

// /
// ├── / (ダッシュボード/ホーム)
// ├── /login (ログイン)
// ├── /projects (プロジェクト一覧)
// │   ├── /[id] (プロジェクト詳細)
// │   │   └── /notes/[noteId] (ノート詳細)
// └── /profile (プロフィール)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
