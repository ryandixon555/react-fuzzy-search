import React from 'react';
import useFuse from 'react-use-fuse';

function MyComponent({projects}) {
  const options = {
    keys: ["name", "email","keywords"]
  }

  const { result, search, term } = useFuse({
    data: projects,
    options
  });

  return (
      <div>
          <input
              onChange={e => search(e.target.value)}
              value={term}
              placeholder="Search for a customer..."
          />

          {result &&
              result.map(customer => {
                console.log(customer);
                if (customer.item) customer = customer.item;
                return (
                  <div key={customer.id}>
                    <p>{customer.name}</p>
                    <p>{customer.email}</p>
                  </div>
                );
              })}
      </div>
  )
}

export default MyComponent;