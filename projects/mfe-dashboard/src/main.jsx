window.process = {
  env: {
    NODE_ENV: 'development',
  },
};
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// el: Là thẻ <div> bên Angular truyền sang , tuc la neu truyen thang thi no la 1 f k hieu la se phai gan vao dau nen phai boc vao 1 wrap r dua el de gan vao dom =create

export function mount(el, props) {
  console.log('okkk', props);
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App initialUser={props?.user} />
    </React.StrictMode>
  );

  return () => {
    root.unmount();
  };
}
