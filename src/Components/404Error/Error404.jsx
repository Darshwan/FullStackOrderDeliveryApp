
export default function Error() {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-[400px] gap-4">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">404 Error</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Sorry, we couldnot find the page you were looking for.
          </p>
        </div>
      </div>
    )
  }
  
  