"use client";
import { mySubStore, subscribeStore } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { HiXMark } from "react-icons/hi2";
import { useTheme } from "next-themes";

export default function SubscribeModal() {
  const { theme, setTheme } = useTheme();
  const { modalOpen, serviceName, setModalOpen } = subscribeStore();
  const { subscribeAdd } = mySubStore();
  const router = useRouter();

  const [fee, setFee] = useState<string>("");

  const onChangeFee = (fee: string) => {
    const tempFee = fee.split(",").join("");

    const regExp = /^[0-9]*$/;
    if (regExp.test(tempFee)) {
      setFee(tempFee);
    }
  };

  const completeAdd = () => {
    const goMypage = confirm("마이 페이지로 이동하시겠습니까?");
    if (goMypage) {
      setModalOpen(modalOpen);
      router.push("/subscribe/my");
    } else {
      setModalOpen(modalOpen);
    }
  };

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "20000",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "360px",
      height: "90%",
      zIndex: "30000",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: theme === "light" ? "white" : "black",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  useEffect(() => {
    if (modalOpen) setFee("");
  }, [modalOpen]);

  return (
    <Modal
      isOpen={modalOpen}
      style={customModalStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <div className="flex justify-end">
        <button onClick={() => setModalOpen(modalOpen)}>
          <HiXMark className="w-6 h-6 p-1 rounded-full hover:bg-slate-100 hover:dark:text-black" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="m-4">
          <span className="font-bold text-lg">{serviceName}</span> 구독료
        </p>
        <div className="relative flex justify-end items-center">
          <input
            className="flex justify-start items-center p-2 outline-none border-2 border-neutral-400 rounded-full"
            placeholder="0"
            type="tel"
            onChange={(e) => onChangeFee(e.target.value)}
            value={fee.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
          <p className="absolute text-center text-sm font-bold mr-4">KRW</p>
        </div>
        <div className="p-4 text-center">
          <button
            className="text-xs underline underline-offset-2 hover:text-slate-400 hover:dark:text-slate-300"
            onClick={() => {
              subscribeAdd(serviceName, fee);
              completeAdd();
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </Modal>
  );
}
