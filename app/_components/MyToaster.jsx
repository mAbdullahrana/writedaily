import { Toaster } from "react-hot-toast";

export default function MyToaster() {
  return (
    <Toaster
      position="botton-right"
      toastOptions={{
        style: {
          background: "#1F1F1F",
          color: "#FAFAFA",
          border: "1px solid #2C2C2C",
          fontSize: "0.9rem",
          padding: "6px",
          borderRadius: "0.5rem",
        },

        success: {
          style: {
            background: "#966BCA",
            color: "#FAFAFA",
            border: "1px solid #7A4BCC",
            fontSize: "0.9rem",
            padding: "6px",
            borderRadius: "0.5rem",
          },
          duration: 5000,
        },

        error: {
          style: {
            background: "#ff0033",
            color: "#FAFAFA",
            border: "1px solid #ff0033",
            fontSize: "0.9rem",
            padding: "6px",
            borderRadius: "0.5rem",
          },
          duration: 5000,
        },

        info: {
          style: {
            background: "#FF6B35",
            color: "#FAFAFA",
            border: "1px solid #E65A2B",
            fontSize: "0.9rem",
            padding: "6px",
            borderRadius: "0.5rem",
          },
          duration: 5000,
        },

        loading: {
          style: {
            background: "#1F1F1F",
            color: "#FAFAFA",
            border: "1px solid #2C2C2C",
            fontSize: "0.9rem",
            padding: "6px",
            borderRadius: "0.5rem",
          },
          duration: 3000,
        },
      }}
    />
  );
}
