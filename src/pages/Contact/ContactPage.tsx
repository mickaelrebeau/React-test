import { useState } from "react"

export default function ContactPage(props: any) {
    const { handleAddMessage } = props
    const [message, setMessages] = useState({
        name:"",
        category:"",
        message:""
    })
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        handleAddMessage(message)

        // const target = event.target as typeof event.target & {
        //     name: { value: string };
        //     category: { value: string };
        //     message: { value: string };
        // }
      
        // const name = target.name.value
        // const category = target.category.value
        // const message = target.message.value

        // const newMessage: Message = {
        //     name: name,
        //     category: category,
        //     message: message
        // }

        // setMessages([...messages, newMessage])

        // target.name.value = "";
        // target.category.value = "";
        // target.message.value = "";
      }

      function handleChange(event: any) {
        const { name, value}: any = event.target
        setMessages({...message, [name]: value})
      }

    return (
        <>
            <h1> Contact Page </h1>
            {
                new Date().toUTCString()
            }
            <div className="border border-1 m-auto mt-5 w-75">
                <div className="p-5">
                    <h2 className="text-center">Contact</h2>
                    <form className="d-flex flex-column w-75 m-auto mt-3" onSubmit={(event) => handleSubmit(event)}>
                        <label htmlFor="name" className="mb-2">Titre</label>
        
                        <input className="" type="text" name="name" id="name" onChange={(event) => handleChange(event)}/>
                        <br />
                        <br />

                        <label htmlFor="category" className="mb-2">Categorie</label>
            
                        <select name="category" id="category" onChange={(event) => handleChange(event)}>
                            <option value="">Selectionne une categorie</option>
                            <option value="ask">Questions</option>
                            <option value="suggestion">Suggestion</option>
                            <option value="request">Demande</option>
                            <option value="other">Autres</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="message" className="mb-2">Votre message</label>
                        <textarea name="message" id="message" onChange={(event) => handleChange(event)}></textarea>
                        <br />

                        <input
                        type="submit"
                        value="Envoyer votre message"
                        className="btn btn-primary"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}