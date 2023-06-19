import { useState } from "react"

export default function ArticlePage(props: any) {
    const { handleAddArticle } = props

    const [article, setArticles] = useState({
        name:"",
        title:"",
        message:"",
        date: new Date().toUTCString()
    })
    
    
    function handleSubmitArticle(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        handleAddArticle(article)
        
        document.querySelector("#form").reset()
    }

    function handleChangeArticle(event: any) {
      const { name, value}: any = event.target
      setArticles({...article, [name]: value, date: new Date().toUTCString()})
    }
    return (
        <>
            <h1> Article Page </h1>
            {
                new Date().toUTCString()
            }
            <div className="border border-1 m-auto mt-5 w-75">
                <div className="p-5">
                    <h2 className="text-center">Ajouter un article</h2>
                    <form className="d-flex flex-column w-75 m-auto mt-3" id="form" onSubmit={(event) => handleSubmitArticle(event)}>
                        <label htmlFor="name" className="mb-2">Nom de l'autheur</label>
        
                        <input className="" type="text" name="name" id="name" onChange={(event) => handleChangeArticle(event)}/>
                        <br />
                        <br />

                        <label htmlFor="title" className="mb-2">titre</label>
        
                        <input className="" type="text" name="title" id="title" onChange={(event) => handleChangeArticle(event)}/>
                        <br />
                        <br />

                        <label htmlFor="message" className="mb-2">Description</label>
                        <textarea name="message" id="message" onChange={(event) => handleChangeArticle(event)}></textarea>
                        <br />

                        <input
                        type="submit"
                        value="Envoyer"
                        className="btn btn-primary"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}