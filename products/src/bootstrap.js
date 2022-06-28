// Generate a list of products and
// show them on the screen to our users

import faker from 'faker';

// mount name is arbitrary  el is an html element.
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  //console.log(products);
  el.innerHTML = products;
  // ReactDOM.render(<App />, el) // here's how you'd do it in React
};

// Context/situation #1:
// We are running this file in development in isolation.
// We are using our lcocal index.html file
// Which DEFINITELY has an element wiht an id of 'dev-product'
// We want to immediately render our app into that element.
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element
  // with id 'dev-products'...
  if (el) {
    // We are probably running in isolation.
    mount(el);
  }
}

// Context/situation #2:
// We are running this file in development or production
// through the CONTAINER app.
// NO GUARNATEE that an element with an id of 'dev-products' exists.
// WE DO NOT WANT to try to immediately render the app.
export { mount };
