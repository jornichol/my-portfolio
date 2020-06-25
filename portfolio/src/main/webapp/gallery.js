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
 * Adds a random city to the page.
 */

function addRandomCity() {
  const cities = ["images/sanfrancisco.jpg","images/nyc.jpg", "images/seattle.jpg", "images/paris.jpg"];

  // Pick a random city.
  const city = cities[Math.floor(Math.random() * cities.length)];

  // Add it to the page.
  document.getElementById('displaycity').src = city;
}
