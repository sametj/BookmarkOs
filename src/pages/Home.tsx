import { useState, FormEvent } from "react"

import Layout from "@/layout/Main"

const Home = () => {
  const [createFormVisible, setCreateFormVisible] = useState(false)
	const [folders, setFolders] = useState([
		{ name: "Folder 1" },
		{ name: "Folder 2" },
		{ name: "Folder 3" },
		{ name: "Folder 4" },
		{ name: "Folder 5" },
		{ name: "Folder 6" },
	]);
  const [folderName, setFolderName] = useState("")

  const handleCreateFolderSubmit = (event:FormEvent) => {
    event.preventDefault()
    setFolders([
      ...folders,
      { name: folderName },
    ])
    setFolderName("")
    setCreateFormVisible(false)
  }

	return (
    <Layout>
      <section className='main_content_container'>
        <div className='main_content'>
          {folders.map((folder, index) => (
            <div
              key={index}
              style={{ 
                width: "100%", 
                border: "1px solid black", 
                borderRadius: "6px", 
                overflow: "hidden", 
                marginTop: "8px"
              }}>
              <div
                style={{
                  width: "300px", 
                  backgroundColor: "lightgreen", 
                  padding: "8px",
                }}
              >
                {folder.name}
              </div>
            </div>
          ))}
          {createFormVisible && (
            <form onSubmit={handleCreateFolderSubmit} style={{ width: "100%" }}>
              <div
                style={{ 
                  width: "100%", 
                  border: "1px solid black", 
                  borderRadius: "6px", 
                  overflow: "hidden", 
                  marginTop: "8px"
                }}>
                <div
                  style={{
                    width: "300px", 
                    backgroundColor: "lightgreen", 
                    padding: "8px",
                  }}
                >
                  <input type="text" value={folderName} onChange={(e) => setFolderName(e.target.value)} autoFocus />
                </div>
              </div>
            </form>
          )}
          <button
            className='create_folder'
            onClick={() => setCreateFormVisible(!createFormVisible)}
            style={{ marginTop: "8px" }}
          >
            Create Folder
          </button>
        </div>
      </section>
    </Layout>
	)
}

export default Home