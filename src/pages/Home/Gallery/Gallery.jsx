import React from 'react';
const Gallery = () => {
    return (

        <main>
            <h2 className='text-center text-3xl mt-2'>Cooking toys photo gallery</h2>
            <section  >

                <img className='w-full h-full' src="https://img.freepik.com/free-vector/woman-washing-dishes-sink-illustration_1308-2157.jpg?size=626&ext=jpg&ga=GA1.2.1803344305.1673915057&semt=ais" alt="" />
            </section>
            <section className='grid md:grid-cols-3'>
                <div>
                    <img src="https://img.freepik.com/premium-photo/kids-toy-wooden-vegetables-background-close-up-children-s-developing-wooden-game-set-wooden-vegetables_653286-146.jpg?size=626&ext=jpg&ga=GA1.1.1803344305.1673915057&semt=ais" alt="" />

                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/top-view-play-dough-background-with-vegetables_23-2149700374.jpg?size=626&ext=jpg&ga=GA1.2.1803344305.1673915057&semt=ais" alt="" />

                </div>
                {/* <div>
                    <img className='w-full h-full' src="https://img.freepik.com/free-vector/girls-cooking-design_1308-184.jpg?size=626&ext=jpg&ga=GA1.1.1803344305.1673915057&semt=ais" alt="" />

                </div> */}


                <div>
                    <img src="https://img.freepik.com/free-photo/top-view-play-dough-background-with-vegetables_23-2149700374.jpg?size=626&ext=jpg&ga=GA1.2.1803344305.1673915057&semt=ais" alt="" />

                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/fried-meat-steaks-with-potatoes-surrounded-by-toys_140725-9694.jpg?size=626&ext=jpg&ga=GA1.1.1803344305.1673915057&semt=ais" alt="" />

                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/large-set-different-food-other-items-white-background_1308-82167.jpg?size=626&ext=jpg&ga=GA1.1.1803344305.1673915057&semt=ais" alt="" />

                </div>
                <div>
                    <img src="https://img.freepik.com/premium-vector/cooking-foods-kitchen-outline-colorful-icons-set_71374-456.jpg?size=626&ext=jpg&ga=GA1.1.1803344305.1673915057&semt=ais" alt="" />

                </div>

            </section>






            {/* <div>
                        <img src="https://img.freepik.com/free-vector/girls-cooking-design_1308-184.jpg?size=626&ext=jpg&ga=GA1.1.1803344305.1673915057&semt=ais" alt="" />

                    </div> */}


            {/* </section> */}
        </main >

    );
};

export default Gallery;
