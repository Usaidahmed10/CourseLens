export function CourseSelection() {
    const courses = ["CMPUT 174", "CMPUT 175", "CMPUT 301", "CMPUT 466"]

    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <div
                        key={course}
                        className="bg-zinc-700 p-6 rounded-xl border border-green-700 shadow-lg hover:border-yellow-300 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-yellow-300 text-center">{course}</h3>
                        <p className="text-white text-center mt-2">Course Description</p>
                    </div>
                ))}
            </div>
        </div>
    )
}