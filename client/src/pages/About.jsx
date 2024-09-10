export default function About() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='max-w-2xl mx-auto p-3 text-center'>
                <div>
                    <h1 className='text-3xl font font-semibold text-center my-7'>
                        About NewsToday
                    </h1>
                    <div className='text-md text-gray-500 flex flex-col gap-6'>
                        <p>
                            Welcome to NewsToday! This project was created by Fanyu Ge
                            as a personal project aimed at providing a platform for up-to-date
                            news content. It serves as a demonstration of full-stack development
                            skills, covering areas such as frontend design, backend development,
                            and database management.
                        </p>
                        <p>
                            The main objective of this project is to fulfill the requirements of
                            COMPX576, the final project course at the University of Waikato.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
