// components/StatementsModal.tsx
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Slider } from "../components/ui/slider";

interface StatementsModalProps {
  open: boolean;
  value: number;
  onChange: (val: number) => void;
  onSave: () => void;
  onClose: () => void;
}

export const StatementsModal: React.FC<StatementsModalProps> = ({
  open,
  value,
  onChange,
  onSave,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Number of Statements</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-4">
          <Slider
            defaultValue={[value]}
            min={1}
            max={50}
            step={1}
            onValueChange={(val) => onChange(val[0])}
            className="w-full"
          />
          <Input
            type="number"
            min={1}
            max={50}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-16 text-center"
          />
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
