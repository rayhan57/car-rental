"use client";
import Alert from "@/components/common/Alert";
import DropdownInput from "@/components/common/DropdownInput";
import InputComponent from "@/components/common/InputComponent";
import { addCar } from "@/libs/fetchingApi";
import { formatThousand } from "@/utils/formatNumber";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddCarPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    nomor_polisi: "",
    nama_mobil: "",
    tahun: "",
    harga_sewa: "",
    status: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Simpan");

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "harga_sewa") {
      setForm((form) => ({ ...form, [id]: formatThousand(value) }));
    } else {
      setForm((form) => ({ ...form, [id]: value }));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setButtonText("Menyimpan...");

    const updateForm = {
      ...form,
      harga_sewa: parseInt(form.harga_sewa.replace(/[^0-9]/g, "")),
    };

    await addCar(updateForm, () => {
      setShowAlert(true);
      setIsDisabled(false);
      setButtonText("Simpan");
      setTimeout(() => router.push("/cars"), 5000);
    });
  };

  return (
    <div className="container mt-5 lg:mt-10">
      <Alert
        message={"Berhasil menambahkan mobil"}
        onShow={showAlert}
        onClose={() => setShowAlert(false)}
      />
      <h1 className="text-xl lg:text-2xl">Tambah Mobil</h1>

      <div className="mx-auto mt-5 max-w-md">
        <form onSubmit={handleSave}>
          <InputComponent
            id="nomor_polisi"
            label="Nomor Polisi"
            type="text"
            value={form.nomor_polisi}
            placeholder="B 1234 AB"
            onChange={handleChange}
          />
          <InputComponent
            id="nama_mobil"
            label="Nama Mobil"
            type="text"
            value={form.nama_mobil}
            placeholder="Toyota Avanza"
            onChange={handleChange}
          />
          <InputComponent
            id="tahun"
            label="Tahun"
            type="number"
            value={form.tahun}
            placeholder="2022"
            onChange={handleChange}
          />
          <InputComponent
            id="harga_sewa"
            label="Harga Sewa"
            type="text"
            value={form.harga_sewa}
            placeholder="100.000"
            onChange={handleChange}
          />
          <DropdownInput
            id="status"
            label="Status"
            selectedValue="Pilih Status"
            value={form.status}
            options={["Tersedia", "Disewa"]}
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

export default AddCarPage;
