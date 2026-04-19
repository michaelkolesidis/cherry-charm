/**
 * Logs a message in console only when in development environments
 *
 * @param message - The text to be logged in console
 */
const devLog = (message: string): void => {
  // Get the current page URL
  const url = window.location.href;

  // Check if the URL is the production URL
  const domain = 'cherrycharm';

  // Only log in console if in development
  if (url.indexOf(domain) === -1) {
    console.log(message);
    return;
  } else {
    return;
  }
};

export default devLog;
