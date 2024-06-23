"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Alert from "../common/Alert";
import InputComponent from "../common/InputComponent";
import SaveButton from "../common/SaveButton";
import DeleteButton from "../common/DeleteButton";
import ModalConfirm from "../common/ModalConfirm";
import { deleteSales, updateSales } from "@/libs/fetchingApi";

const EditSales = ({ data }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    id_sales: data.id_sales,
    nama: data.nama,
    nomor_telepon: data.nomor_telepon,
    email: data.email,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Simpan Perubahan");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setButtonText("Menyimpan Perubahan...");

    await updateSales(form.id_sales, form, () => {
      setShowAlert(true);
      setIsDisabled(false);
      setButtonText("Simpan Perubahan");
      setAlertMessage("Berhasil mengedit sales");
      setTimeout(() => router.push("/sales"), 5000);
    });
  };

  const openModalDelete = () => {
    setModalOpen(true);
  };

  const handleDelete = async () => {
    setModalOpen(false);
    await deleteSales(form.id_sales, () => {
      setShowAlert(true);
      setAlertMessage("Berhasil menghapus sales");
      setTimeout(() => router.push("/sales"), 5000);
    });
  };

  return (
    <div className="mx-auto mt-5 max-w-md">
      <Alert
        message={alertMessage}
        onShow={showAlert}
        onClose={() => setShowAlert(false)}
      />
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
        <div className="space-x-2">
          <SaveButton label={buttonText} disabled={isDisabled} />
          <DeleteButton label="Hapus Sales" onClick={openModalDelete} />
        </div>
      </form>
      <ModalConfirm
        message={`Yakin ingin menghapus sales dengan nama ${form.nama}?`}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default EditSales;
