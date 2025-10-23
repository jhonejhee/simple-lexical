/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// setupEnv must load before App because lexical computes CAN_USE_BEFORE_INPUT
// at import time (disableBeforeInput is used to test legacy events)
// eslint-disable-next-line
import setupEnv from './setupEnv';
import './index.css';
import App from './App';

if (setupEnv.disableBeforeInput) {
  // vite is really aggressive about tree-shaking, this
  // ensures that the side-effects of importing setupEnv happens
}

// Handle runtime errors
const showErrorOverlay = (err: Event) => {
  const ErrorOverlay = customElements.get('vite-error-overlay');
  if (!ErrorOverlay) {
    return;
  }
  const overlay = new ErrorOverlay(err);
  const body = document.body;
  if (body !== null) {
    body.appendChild(overlay);
  }
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({ reason }) => showErrorOverlay(reason));

interface LexicalEditorProps {
  markdownText: string;
  handleEditorChange: (updatedMarkdown: string) => void;
  loadOnce?: boolean;
  objectId?: string | number | null;
}

// eslint-disable-next-line
export default function LexicalEditor({
  markdownText,
  handleEditorChange,
  loadOnce = false,
  objectId = null,
}: LexicalEditorProps) {
  return (
    <div className="lexical-wrapper">
      <App
        markdownText={markdownText}
        handleEditorChange={handleEditorChange}
        loadOnce={loadOnce}
        objectId={objectId}
      />
    </div>
  );
}
