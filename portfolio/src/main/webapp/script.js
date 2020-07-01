// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Fetches data from the servers and adds them to the DOM.
 */
function getServerData() {
  fetch('/data').then(response => response.json()).then((data) => {

    document.getElementById('json-data-container').innerText = data.cars + ', ' + data.pen + ', ' + data.books;

  });
}

/**
 * The async and await keywords use fetch to request '/data' and add it to DOM.
 */
 async function getDataUsingAsyncAwait() {
    const response = await fetch('/data');
    const quote = await response.text();
    document.getElementById('data-container').innerText = quote;
 }

/** Tells the server to delete comments. */
function deleteComments() {
  fetch('/delete-data', {method: 'POST'});
}