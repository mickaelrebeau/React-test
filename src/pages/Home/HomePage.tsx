import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function HomePage(props: any) {
    const { handleAddMessage, articles, messages } = props

    const [message, setMessages] = useState({
        name:"",
        subject:"",
        message:"",
        date: new Date().toUTCString()
    })

    const dateFormatter = (el: any) => {
        const date = new Date(el)
        return `Envoyé le ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        handleAddMessage(message)
    }

    function handleChange(event: any) {
      const { name, value}: any = event.target
      setMessages({...message, [name]: value, date: new Date().toUTCString()})
    }
    return (
        <>
            <h1> Home Page </h1>
            {
                new Date().toUTCString()
            }

            <main className="d-flex align-items-start justify-content-center">
                <section className="p-5">
                    <h2>Boite de réception des messages</h2>
                    <div className="d-flex flex-row gap-3 my-4">
                        <Card className="p-3 card">
                            <Card.Title>Amine - Le react facile - Lorem ipsum dolor sit amet...</Card.Title>
                            <Card.Subtitle>10/05/2023</Card.Subtitle>
                        </Card>
                        <Button variant="secondary" size="lg" active>
                            Voir
                        </Button>
                    </div>
                    {messages.map((message: any, index: any) => (
                    <div className="d-flex flex-row gap-3 my-4" key={index}>
                        <Card className="p-3 card">
                            <Card.Title>{message.name} - {message.subject} - {message.message} </Card.Title>
                            <Card.Subtitle>{dateFormatter(message.date)}</Card.Subtitle>
                        </Card>
                        <Button variant="secondary" size="lg" active>
                            Voir
                        </Button>
                    </div>
                    ))}
                </section>

                <section>
                    <h2 className="mt-5">Nous contacter</h2>
                    <div className="border border-1 m-auto mt-3">
                        <div className="p-4">
                            <form className="d-flex flex-column m-auto" onSubmit={(event) => handleSubmit(event)}>
                                <label htmlFor="name" className="mb-2">Nom</label>
                
                                <input className="" type="text" name="name" id="name" onChange={(event) => handleChange(event)}/>
                                <br />
                                <br />

                                <label htmlFor="subject" className="mb-2">Sujet</label>

                                <input className="" type="text" name="subject" id="subject" onChange={(event) => handleChange(event)}/>
                                <br />
                                <br />

                                <label htmlFor="message" className="mb-2">Message</label>
                                <textarea name="message" id="message" onChange={(event) => handleChange(event)}></textarea>
                                <br />

                                <input
                                type="submit"
                                value="Envoyer"
                                className="btn btn-primary"
                                />
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-75 m-auto mb-5 pb-5">
                <h2>Le dernier article</h2>
                <div>
                    <Card className="my-4">
                        <div className="d-flex p-3">
                            <Card.Img className="mike" src="../public/images/mike.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle>Test 42</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                    {articles.sort((a: any,b: any) => new Date(b.date) - new Date(a.date)).slice(0,1)
                    .map((article: any, index: any) => (
                        <Card className="my-4">
                            <div key={index} className="d-flex p-3">
                                <Card.Img className="mike" src="../public/images/mike.png" />
                                <Card.Body>
                                    <Card.Title>{article.name}</Card.Title>
                                    <Card.Subtitle>{article.title}</Card.Subtitle>
                                    <Card.Text>
                                        {article.message}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    ))}
                </div>
            </footer>
        </>
    )
}