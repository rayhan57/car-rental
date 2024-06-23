"use client";
import React, { useState } from "react";
import InputComponent from "../common/InputComponent";
import SaveButton from "../common/SaveButton";
import DeleteButton from "../common/DeleteButton";
import { formatThousand } from "@/utils/formatNumber";
import DropdownInput from "../common/DropdownInput";
import ModalConfirm from "../common/ModalConfirm";
import { deleteCar, updateCar } from "@/libs/fetchingApi";
import { useRouter } from "next/navigation";
import Alert from "../common/Alert";

const EditCar = ({ data }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    nomor_polisi: data.nomor_polisi,
    nama_mobil: data.nama_mobil,
    tahun: data.tahun,
    harga_sewa: formatThousand(data.harga_sewa),
    status: data.status,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Simpan Perubahan");

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
    setButtonText("Menyimpan Perubahan...");

    const updateForm = {
      ...form,
      harga_sewa: parseInt(form.harga_sewa.replace(/[^0-9]/g, "")),
    };

    await updateCar(form.nomor_polisi, updateForm, () => {
      setShowAlert(true);
      setIsDisabled(false);
      setButtonText("Simpan Perubahan");
      setAlertMessage("Berhasil mengedit mobil");
      setTimeout(() => router.push("/cars"), 5000);
    });
  };

  const openModalDelete = () => {
    setModalOpen(true);
  };

  const handleDelete = async () => {
    setModalOpen(false);
    await deleteCar(form.nomor_polisi, () => {
      setShowAlert(true);
      setAlertMessage("Berhasil menghapus mobil");
      setTimeout(() => router.push("/cars"), 5000);
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
          placeholder="Rp. 100.000"
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
        <div className="space-x-2">
          <SaveButton label={buttonText} disabled={isDisabled} />
          <DeleteButton label="Hapus Mobil" onClick={openModalDelete} />
        </div>
      </form>
      <ModalConfirm
        message={`Yakin ingin menghapus mobil dengan nomor polisi ${form.nomor_polisi}?`}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default EditCar;
