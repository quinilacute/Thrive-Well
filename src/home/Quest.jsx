import React from "react";



const Quest = () => {
    return(
        <div>
            <div>
                <h3>Frequently asked Questions</h3>
                <p>Have Questions?  We’re here Help</p>
            </div>

            <div>
                <div>
                    <p>Is there a free trial available? </p>
                    toggle
                    <p>Answer to question</p>
                </div>

                <div>
                    <p>Can i change my plan later</p>
                    toggle
                    <p>Answer to question</p>
                </div>

                <div>
                    <p>What is cancellation policy</p>
                    toggle
                    <p>Answer to question</p>
                </div>


                <div>
                    <p>How do i change my account email?</p>
                    toggle
                    <p>Answer to question</p>
                </div>

                
                <div>
                    <p>How does billing works?</p>
                    toggle sign to toggle the answer in and reflect when its clecked
                    <p>Answer to question</p>
                </div>
            </div>

            <div>
               <div>
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               </div>
               <h3>Still have questions?</h3>
               <p>Can find the answer you looking for? Ask Now</p>

               <div>
                <form onSubmit={handleContact} className="flex flex-col gap-4">
            <label htmlFor="name" className="font-bold">Name</label>
            <input id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Your Name" className="p-2 border rounded" />
            <label htmlFor="email" className="font-bold">Your Email</label>
            <input id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your Email" className="p-2 border rounded" />
            <label htmlFor="message" className="font-bold">Question</label>
            <textarea id="message" onChange={(e) => setMas(e.target.value)} value={mas} placeholder="Enter your Question..." cols={20} rows={5} className="p-2 border rounded" />
            <Button type="submit">Send</Button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">Successfully!</p>}
          </form>
               </div>
            </div>
        </div>
    )
}


export default Quest;