"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Alert from "../common/Alert";
import InputComponent from "../common/InputComponent";
import { addRent, updateCar } from "@/libs/fetchingApi";
import DropdownInputRent from "./DropdownInputRent";
import { formatThousand } from "@/utils/formatNumber";
import { diffDays } from "@/utils/formatDate";

const AddRent = ({ availableCustomers, availableCars, availableSales }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    nomor_polisi: "",
    id_customer: "",
    id_sales: "",
    tanggal_ambil: "",
    tanggal_kembali: "",
    total_harga: 0,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Simpan");

  const customerOptions = availableCustomers.map((customer) => ({
    value: customer.id_customer,
    label: customer.nama,
  }));
  const carOptions = availableCars.map((car) => ({
    value: car.nomor_polisi,
    label: car.nama_mobil,
  }));
  const salesOptions = availableSales.map((sales) => ({
    value: sales.id_sales,
    label: sales.nama,
  }));

  const calculateTotalPrice = (
    nomor_polisi,
    tanggal_ambil,
    tanggal_kembali,
  ) => {
    const selectedCar = availableCars.find(
      (car) => car.nomor_polisi === nomor_polisi,
    );
    if (!selectedCar || !tanggal_ambil || !tanggal_kembali) {
      return 0;
    }

    const days = diffDays(tanggal_ambil, tanggal_kembali);
    const price = selectedCar.harga_sewa * days;
    return formatThousand(price);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updatedForm = {
      ...form,
      [id]: value,
      total_harga: calculateTotalPrice(
        id === "nomor_polisi" ? value : form.nomor_polisi,
        id === "tanggal_ambil" ? value : form.tanggal_ambil,
        id === "tanggal_kembali" ? value : form.tanggal_kembali,
      ),
    };

    setForm(updatedForm);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setButtonText("Menyimpan...");

    const updatedForm = {
      ...form,
      total_harga: form.total_harga.replace(/[^0-9]/g, ""),
    };

    await addRent(updatedForm, () => {
      setShowAlert(true);
      setIsDisabled(false);
      setButtonText("Simpan");
      setTimeout(() => router.push("/"), 5000);
    });
    await updateCar(form.nomor_polisi, { status: "Disewa" }, () => {});
  };

  return (
    <div className="container mt-5 lg:mt-10">
      <Alert
        message={"Berhasil menambahkan daftar sewa"}
        onShow={showAlert}
        onClose={() => setShowAlert(false)}
      />
      <h1 className="text-xl lg:text-2xl">Tambah Penyewaan Mobil</h1>

      <div className="mx-auto mt-5 max-w-md">
        <form onSubmit={handleSave}>
          <DropdownInputRent
            id="id_customer"
            label="Nama Customer"
            value={form.id_customer}
            selectedValue="Pilih Customer"
            options={customerOptions}
            onChange={handleChange}
          />
          <DropdownInputRent
            id="nomor_polisi"
            label="Nama Mobil"
            value={form.nomor_polisi}
            selectedValue="Pilih Mobil"
            options={carOptions}
            onChange={handleChange}
          />
          <InputComponent
            id="tanggal_ambil"
            label="Tanggal Ambil"
            type="datetime-local"
            value={form.tanggal_ambil}
            onChange={handleChange}
          />
          <InputComponent
            id="tanggal_kembali"
            label="Tanggal Kembali"
            type="datetime-local"
            value={form.tanggal_kembali}
            onChange={handleChange}
          />
          <DropdownInputRent
            id="id_sales"
            label="Nama Sales"
            value={form.id_sales}
            selectedValue="Pilih Sales"
            options={salesOptions}
            onChange={handleChange}
          />
          <InputComponent
            id="total_harga"
            label="Total Harga"
            type="text"
            value={form.total_harga}
            onChange={handleChange}
            disabled
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

export default AddRent;
