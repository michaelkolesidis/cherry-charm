/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

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
