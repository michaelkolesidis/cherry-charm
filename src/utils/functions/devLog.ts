// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

const devLog = (message: string) => {
  // Get the current page URL
  const url = window.location.href;

  // Check if the URL is the production URL
  const domain = "cherry-charm";

  // Only log in console if in development
  if (url.indexOf(domain) === -1) {
    console.log(message);
    return;
  } else {
    return;
  }
};

export default devLog;
