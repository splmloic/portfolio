import React from "react"
import Projects from '../components/projects'
import hero from '../assets/imgs/hero-pic.png'

function Home() {
    return(
        <div  className="mx-auto max-w-6xl py-2 sm:py-8 lg:py-12" >
            <div className="flex items-center justify-between">
            <img src={hero} alt="" className="ml-6 rounded-xl" />
                <div className="flex-1 pl-5">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Salut 👋, Moi c'est <strong className="text-purple-700">Loïc</strong></h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Bienvenue sur mon Portfolio ! 
                    <br /> Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet.
                    <br />J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
                </div>
            </div>
            <div className="py-5">
                <p className="text-lg text-center tracking-tight text-gray-900 sm:text-md">Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
            </div>
            < Projects/>
            <p className="text-lg text-center tracking-tight text-gray-900 sm:text-md">Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps. Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
            <form className="max-w-3xl mx-auto">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-purple-500" placeholder="Votre email" required />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Sujet</label>
                <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-purple-500" placeholder="Sujet du message" required />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-purple-500" placeholder="Votre message" required></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Envoyer</button>
            </div>
            </form>
        </div>
    )
}

export default Home;