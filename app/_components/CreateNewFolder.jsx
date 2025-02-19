import { FolderPlus } from "lucide-react"
import Button from "./Button"

function CreateNewFolder() {
  return (
    <Button as='secondary'><FolderPlus />New Folder</Button>
  )
}

export default CreateNewFolder
