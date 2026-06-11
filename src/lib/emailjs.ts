export const FORMS_CONFIG = {
  accessKey: import.meta.env.VITE_WEB3FORMS_KEY,
};

export function isFormsConfigured() {
  return !!FORMS_CONFIG.accessKey;
}