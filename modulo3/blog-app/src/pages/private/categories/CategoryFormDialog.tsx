// components/CategoryFormDialog.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState, useEffect, type JSX } from "react";
import axiosInstance from "../../../api/axios";

interface Category {
  id: string;
  name: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  category: Category | null;
}

export default function CategoryFormDialog({
  open,
  onClose,
  onSaved,
  category,
}: Props): JSX.Element {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setName(category ? category.name : "");
  }, [category]);

  const handleSave = (): void => {
    const data = { name };
    const req = category
      ? axiosInstance.put(`/categories/${category.id}`, data)
      : axiosInstance.post("/categories", data);
    req.then(() => {
      onSaved();
      onClose();
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{category ? "Editar categoría" : "Nueva categoría"}</DialogTitle>
      <DialogContent sx={{ mt: 1 }}>
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSave}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
