import { BsBookmarkStarFill } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { IoPaperPlaneSharp } from 'react-icons/io5';

const PropertyAside = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <aside className="space-y-4">
        <button className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 font-bold text-white hover:bg-accent">
          <BsBookmarkStarFill className="fas fa-bookmark mr-2" /> Bookmark Property
        </button>
        <button className="flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
          <FaShareAlt className="mr-2" />
          Share Property
        </button>

        {/* <!-- Contact Form --> */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-6 text-xl font-bold text-black">Contact Property Manager</h3>
          <form>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-muted-foreground" htmlFor="name">
                Name:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-muted-foreground shadow focus:outline-none"
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-muted-foreground" htmlFor={'email'}>
                Email:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-muted-foreground shadow focus:outline-none"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-muted-foreground" htmlFor="phone">
                Phone:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-muted-foreground shadow focus:outline-none"
                id="phone"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-muted-foreground" htmlFor="message">
                Message:
              </label>
              <textarea
                className="focus:shadow-outline h-44 w-full appearance-none rounded border bg-white px-3 py-2 text-muted-foreground shadow focus:outline-none"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button
                className="focus:shadow-outline flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 font-bold text-white hover:bg-accent focus:outline-none"
                type="submit"
              >
                <IoPaperPlaneSharp className="mr-2" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
};
export default PropertyAside;
