import Image from "next/image";

export function DoctorProfile() {
    return (
        <section className="bg-gradient-to-br from-brand-purple/10 to-brand-orange/10 py-20 px-[5%]">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center">
                    {/* Doctor Image */}
                    <div className="flex justify-center">
                        <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden shadow-[0_16px_30px_rgba(0,0,0,0.15)] border-8 border-white">
                            <Image
                                src="/images/kids-dental-care.jpg"
                                alt="Dr. Ammar Idlibi, DMD"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Doctor Info */}
                    <div>
                        <h2 className="heading-style-h2 text-brand-purple mb-4 font-heading">
                            <strong>Board Certified Pediatric Specialist</strong>
                        </h2>
                        <h3 className="text-3xl font-bold text-brand-orange mb-6">
                            Dr. Ammar Idlibi, DMD
                        </h3>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                Dr. Idlibi has been certified as <strong>'Diplomate'</strong> of the American Board of Pediatric Dentistry in 1994 and has since maintained his annual Board certification.
                            </p>
                            <p>
                                A Board Certified 'Diplomate' is a pediatric dentist whose credentials have been verified, who has successfully completed voluntary examinations, and who demonstrates specialized knowledge and skill. A Diplomate is dedicated to providing exceptional patient care through a voluntary commitment to lifelong learning.
                            </p>
                            <p>
                                Dr. Idlibi has had operating privileges at Connecticut Children's Medical Center (CCMC) since 2003 and has provided specialized dental care to thousands of children under general anesthesia. His primary focus is on preserving the integrity of children's psyche through employing behavior management techniques, conscious sedation, and general anesthesia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
