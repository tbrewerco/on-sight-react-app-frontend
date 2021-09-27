import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import huecoGrades from "../utils/BoulderGrades";
import yosemiteGrades from "../utils/grades";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Star from "./Star";

export default function EditTickModal({ show, onCloseEditModal }) {

  if (!show) {
    return null;
  }
  else return (
    <>
      <p>Edit Tick Modal</p>
      <button onClick={(e) => onCloseEditModal(e)}>Close</button>
    </>
  )
}

