"use client";
import Alert from "@/components/common/Alert";
import InputComponent from "@/components/common/InputComponent";
import { addCustomer } from "@/libs/fetchingApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddCustomerPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    nomor_telepon: "",
    email: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Simpan");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setButtonText("Menyimpan...");

    await addCustomer(form, () => {
      setShowAlert(true);
      setIsDisabled(false);
      setButtonText("Simpan");
      setTimeout(() => router.push("/customers"), 5000);
    });
  };

  return (
    <div className="container mt-5 lg:mt-10">
      <Alert
        message={"Berhasil menambahkan customer"}
        onShow={showAlert}
        onClose={() => setShowAlert(false)}
      />
      <h1 className="text-xl lg:text-2xl">Tambah Customer</h1>

      <div className="mx-auto mt-5 max-w-md">
        <form onSubmit={handleSave}>
          <InputComponent
            id="nama"
            label="Nama"
            type="text"
            value={form.nama}
            placeholder="John Doe"
            onChange={handleChange}
          />
          <InputComponent
            id="alamat"
            label="Alamat"
            type="text"
            value={form.alamat}
            placeholder="Jl. Raya No. 123, Jakarta"
            onChange={handleChange}
          />
          <InputComponent
            id="nomor_telepon"
            label="Nomor Telepon"
            type="number"
            value={form.nomor_telepon}
            placeholder="081234567890"
            onChange={handleChange}
          />
          <InputComponent
            id="email"
            label="Email"
            type="email"
            value={form.email}
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          <button
            className="w-full rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 disabled:opacity-50 disabled:hover:bg-green-600 lg:text-base"
            disabled={isDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerPage;
