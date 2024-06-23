"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Alert from "../common/Alert";
import { formatThousand } from "@/utils/formatNumber";
import DropdownInputRent from "../addRentPage/DropdownInputRent";
import InputComponent from "../common/InputComponent";
import SaveButton from "../common/SaveButton";
import DeleteButton from "../common/DeleteButton";
import ModalConfirm from "../common/ModalConfirm";
import { diffDays, formatToDatetimeLocal } from "@/utils/formatDate";
import { deleteRent, updateCar, updateRent } from "@/libs/fetchingApi";

const EditRent = ({ data, customerData, carData, salesData }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    nomor_polisi: data.nomor_polisi,
    id_customer: data.id_customer,
    id_sales: data.id_sales,
    tanggal_ambil: formatToDatetimeLocal(data.tanggal_ambil),
    tanggal_kembali: formatToDatetimeLocal(data.tanggal_kembali),
    total_harga: formatThousand(data.total_harga),
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Simpan Perubahan");

  const customerOptions = {
    value: customerData.id_customer,
    label: customerData.nama,
  };
  const carOptions = carData.map((car) => ({
    value: car.nomor_polisi,
    label: car.nama_mobil,
  }));
  const salesOptions = {
    value: salesData.id_sales,
    label: salesData.nama,
  };
  const calculateTotalPrice = (
    nomor_polisi,
    tanggal_ambil,
    tanggal_kembali,
  ) => {
    const selectedCar = carData.find(
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
    setButtonText("Menyimpan Perubahan...");

    const updatedForm = {
      ...form,
      total_harga: form.total_harga.replace(/[^0-9]/g, ""),
    };

    await updateRent(data.id_sewa, updatedForm, () => {
      setShowAlert(true);
      setIsDisabled(false);
      setButtonText("Simpan Perubahan");
      setAlertMessage("Berhasil mengedit daftar penyewaan");
      setTimeout(() => router.push("/"), 5000);
    });
  };

  const openModalDelete = () => {
    setModalOpen(true);
  };

  const handleDelete = async () => {
    setModalOpen(false);
    await deleteRent(data.id_sewa, () => {
      setShowAlert(true);
      setAlertMessage("Berhasil menghapus daftar penyewaan");
      setTimeout(() => router.push("/"), 5000);
    });
    await updateCar(data.nomor_polisi, { status: "Tersedia" }, () => {});
  };

  return (
    <div className="mx-auto mt-5 max-w-md">
      <Alert
        message={alertMessage}
        onShow={showAlert}
        onClose={() => setShowAlert(false)}
      />
      <form onSubmit={handleSave}>
        <DropdownInputRent
          id="id_customer"
          label="Nama Customer"
          value={form.id_customer}
          selectedValue="Pilih Customer"
          options={[customerOptions]}
          onChange={handleChange}
          disabled
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
          options={[salesOptions]}
          onChange={handleChange}
          disabled
        />
        <InputComponent
          id="total_harga"
          label="Total Harga"
          type="text"
          value={form.total_harga}
          onChange={handleChange}
          disabled
        />
        <div className="space-x-2">
          <SaveButton label={buttonText} disabled={isDisabled} />
          <DeleteButton label="Hapus Mobil" onClick={openModalDelete} />
        </div>
      </form>
      <ModalConfirm
        message={`Yakin ingin menghapus daftar penyewaan dengan nama ${customerData.nama}?`}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default EditRent;
