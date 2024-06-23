"use client";
import React, { useState } from "react";
import InputComponent from "../common/InputComponent";
import Alert from "../common/Alert";
import ModalConfirm from "../common/ModalConfirm";
import { deleteCustomer, updateCustomer } from "@/libs/fetchingApi";
import { useRouter } from "next/navigation";
import SaveButton from "../common/SaveButton";
import DeleteButton from "../common/DeleteButton";

const EditCustomer = ({ data }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    id_customer: data.id_customer,
    nama: data.nama,
    alamat: data.alamat,
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

    await updateCustomer(form.id_customer, form, () => {
      setShowAlert(true);
      setIsDisabled(false);
      setButtonText("Simpan Perubahan");
      setAlertMessage("Berhasil mengedit customer");
      setTimeout(() => router.push("/customers"), 5000);
    });
  };

  const openModalDelete = () => {
    setModalOpen(true);
  };

  const handleDelete = async () => {
    setModalOpen(false);
    await deleteCustomer(form.id_customer, () => {
      setShowAlert(true);
      setAlertMessage("Berhasil menghapus customer");
      setTimeout(() => router.push("/customers"), 5000);
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
        <div className="space-x-2">
          <SaveButton label={buttonText} disabled={isDisabled} />
          <DeleteButton label="Hapus Customer" onClick={openModalDelete} />
        </div>
      </form>
      <ModalConfirm
        message={`Yakin ingin menghapus customer dengan nama ${form.nama}?`}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default EditCustomer;
