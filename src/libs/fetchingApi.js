export const getCars = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cars`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

export const getCarByNopol = async (nopol) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars/${nopol}`,
    { cache: "no-store" },
  );
  const data = await response.json();
  return data[0];
};

export const addCar = async (carData, onSuccess) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to add car");
  }
};

export const updateCar = async (nopol, carData, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars/${nopol}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to update car");
  }
};

export const deleteCar = async (nopol, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/cars/${nopol}`,
    {
      method: "DELETE",
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to delete car");
  }
};

export const getCustomers = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/customers`,
    { cache: "no-store" },
  );
  const data = await response.json();
  return data;
};

export const getCustomerById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/customers/${id}`,
    { cache: "no-store" },
  );
  const data = await response.json();
  return data[0];
};

export const addCustomer = async (customerData, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/customers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to add customer");
  }
};

export const updateCustomer = async (id, customerData, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/customers/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to update customer");
  }
};

export const deleteCustomer = async (id, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/customers/${id}`,
    {
      method: "DELETE",
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to delete customer");
  }
};

export const getSales = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sales`,
    {
      cache: "no-store",
    },
  );
  const data = await response.json();
  return data;
};

export const getSalesById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sales/${id}`,
    { cache: "no-store" },
  );
  const data = await response.json();
  return data[0];
};

export const addSales = async (saleData, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sales`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saleData),
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to add sale");
  }
};

export const updateSales = async (id, saleData, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sales/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saleData),
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to update sale");
  }
};

export const deleteSales = async (id, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sales/${id}`,
    {
      method: "DELETE",
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to delete sale");
  }
};

export const getRent = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sewa`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

export const getRentById = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sewa/${id}`,
    { cache: "no-store" },
  );
  const data = await response.json();
  return data[0];
};

export const addRent = async (rentData, onSuccess) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sewa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rentData),
  });

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to add rent");
  }
};

export const updateRent = async (id, rentData, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sewa/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rentData),
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to update rent");
  }
};

export const deleteRent = async (id, onSuccess) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sewa/${id}`,
    {
      method: "DELETE",
    },
  );

  if (response.ok) {
    onSuccess();
  } else {
    console.log("Failed to delete rent");
  }
};
