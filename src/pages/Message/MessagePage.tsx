// import React from "react";

import { Table } from "react-bootstrap"

// interface Message {
//     name: string;
//     category: string;
//     message: string;
// }
  
// interface MessagePageProps {
//     messages: Message[];
// }

// const MessagePage: React.FC<MessagePageProps> = ({ messages }) => {
//     return (
//         <>
//             <h1> Message Page </h1>
//             {
//                 new Date().toUTCString()
//             }
//             <div>
//                 <ul>
//                     {messages.map((message, index) => (
//                     <li key={index} className="my-3">
//                         <strong>Titre:</strong> {message.name}
//                         <br />
//                         <strong>Categorie:</strong> {message.category}
//                         <br />
//                         <strong>Message:</strong> {message.message}
//                     </li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     )
// }

export default function MessagePage(props: any) {
    const { messages } = props
    return (
        <>
            <h1> Message Page </h1>
            {
                new Date().toUTCString()
            }
            <div className="my-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Sujet</th>
                        <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>42</td>
                        <td>Test</td>
                        <td>Question</td>
                        <td>Exemple de message</td>
                        </tr>
                    {messages.map((message: any, index: any) => (
                        <tr>
                        <td>{ index }</td>
                        <td>{message.name}</td>
                        <td>{message.subject}</td>
                        <td>{message.message}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}