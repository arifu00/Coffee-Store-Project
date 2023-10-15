import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
  console.log(loadedCoffee);
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    loadedCoffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-[#f4f3f0]  p-32 ">
          <h3 className="text-3xl font-extrabold text-center mb-8">
            Update Coffee Details...
          </h3>

          <form onSubmit={handleUpdateCoffee}>
            {/* form name & quantity row */}
            <div className="md:flex gap-8 mb-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Coffee Name
                  </span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  defaultValue={name}
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Available Quantity
                  </span>
                </label>

                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  defaultValue={quantity}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form supplier & tastes row */}
            <div className="md:flex gap-8 mb-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Supplier Name
                  </span>
                </label>

                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier Name"
                  defaultValue={supplier}
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">Taste</span>
                </label>

                <input
                  type="text"
                  name="taste"
                  placeholder="Taste"
                  defaultValue={taste}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form category & details row */}
            <div className="md:flex gap-8 mb-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">Category</span>
                </label>

                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  defaultValue={category}
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">Details</span>
                </label>

                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  defaultValue={details}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form photo row */}
            <div className="">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Photo URL
                  </span>
                </label>

                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  defaultValue={photo}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* submit btn  */}
            <input
              type="submit"
              value="Update Coffee"
              className="py-2 mt-8 text-white text-xl font-semibold rounded-lg btn-block bg-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
