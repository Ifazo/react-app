import { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: "\n  :root {\n    font-family: 'Poppins'\n  }\n",
          }}
        />
        <div className="my-10 mx-auto flex w-screen max-w-screen-lg flex-col rounded-3xl bg-green-50 px-4">
          <p className="mt-20 text-center sm:text-lg font-semibold text-lime-500">
            Our Blog
          </p>
          <h1 className="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Resources for makers and creaters to learn, sell &amp; Grow
          </h1>
          <p className="mx-auto hidden sm:block mt-4 max-w-5xl text-center text-gray-500 sm:mt-8 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis
            deleniti minus ab aliquam nemo.
          </p>
          <div className="mx-auto mt-8 mb-20 flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-6">
            <button className="rounded-full bg-black px-10 py-3 font-medium text-white hover:opacity-80 sm:w-auto">
              Get Started
            </button>
            <button className="rounded-full border-2 border-black px-10 py-3 font-medium text-black transition hover:bg-black hover:text-white sm:w-auto">
              View Pricing
            </button>
          </div>
        </div>
      </>
    );
  }
}
