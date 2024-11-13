"use client";
import { useEffect } from "react";
import Cookie from "js-cookie";
import { visitConterPost } from "@/libs/visit/actions";

const useDailyVisitCounter = () => {
  useEffect(() => {
    const visitDate = Cookie.get("visitDate");
    const today = new Date().toISOString().split("T")[0];

    // if (visitDate !== today) {
    if (visitDate !== today) {
      visitConterPost();

      //   fetch("/api/visit", { method: "POST" })
      //     .then((res) => res.json())
      //     .then((data) => console.log("Visita registrada:", data))
      //     .catch((error) => console.error("Error al registrar visita:", error));

      Cookie.set("visitDate", today, { expires: 1 });
    }
  }, []);
};

export default useDailyVisitCounter;
