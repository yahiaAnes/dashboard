import _ from "lodash";
import { useState, useRef, useEffect } from "react";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import Lucide from "@/components/Base/Lucide";
import CategoryCard from "@/components/DashBoardTemp/CategoryCard";
import { Dialog, Menu } from "@/components/Base/Headless";
import { Link, useNavigate } from "react-router-dom";

function Main() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [activeCat, setActiveCat] = useState(2);
  const [subCategories, setSubCategories] = useState([]);

  const handleActiveCat = (id: number) => {
    setActiveCat(id);
    hanldeSubCategories();
  };

  const hanldeSubCategories = () => {
    let newList: any = [];
    {
      _.take(fakerData, 7).map((faker, fakerKey) => newList.push(faker));
    }
    setSubCategories(newList);
    console.log(subCategories);
  };

  const deleteButtonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    hanldeSubCategories();
  }, []);

  return (
    <>
      <h2 className="mt-5 text-lg font-medium intro-y">Produts</h2>
      <div className="overflow-x-auto scrollbar-hide flex pb-4 ">
        <div className="mt-4 flex gap-3 ">
          {_.take(fakerData, 12).map((faker, i) => (
            <h1
              key={i}
              onClick={() => handleActiveCat(i)}
              className={`capitalize font-semibold px-2 border-b-4 pb-2 cursor-pointer duration-150 ${
                i == activeCat
                  ? "text-[#111] border-[#05503C] "
                  : " text-[#676767] border-[#fff0] "
              } `}
            >
              categories
            </h1>
          ))}
        </div>
      </div>
      {/* <h2 className="mt-5 text-lg font-medium intro-y">Sub-Categories</h2> */}
      <div className="overflow-x-auto scrollbar-hide flex pb-4 ">
        <div className="mt-4 flex gap-3 ">
          {/* {_.take(fakerData, 7).map((faker, fakerKey) => (
            <CategoryCard item={faker} />
          ))} */}
          {subCategories.map((faker, fakerKey) => (
            <CategoryCard item={faker} key={fakerKey} />
          ))}
        </div>
      </div>
      {/* <h2 className="mt-10 text-lg font-medium intro-y">Products</h2> */}
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <Button
            variant="primary"
            className="mr-2 shadow-md"
            onClick={() => navigate("/add-product")}
          >
            Add New Product
          </Button>
          <Menu>
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                Excel
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                PDF
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className="hidden mx-auto md:block text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <div className="relative w-56 text-slate-500">
              <FormInput
                type="text"
                className="w-56 pr-10 !box"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
              />
            </div>
          </div>
        </div> */}

        {/* BEGIN: Users Layout */}

        {_.take(fakerData, 12).map((faker, fakerKey) => (
          <div
            key={fakerKey}
            className="col-span-12 intro-y md:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <div className="box">
              <div className="p-5">
                <div className="h-40 overflow-hidden rounded-md 2xl:h-56 image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-transparant before:to-black/10 ">
                  <img
                    alt="Midone - HTML Admin Template"
                    className="rounded-md"
                    src={faker.images[0]}
                  />
                  {/* {faker.trueFalse[0] && (
                    <span className="absolute top-0 z-10 px-2 py-1 m-5 text-xs text-white rounded bg-pending/80">
                      Featured
                    </span>
                  )} */}
                  {/* <div className="absolute bottom-0 z-10 px-5 pb-6 text-white">
                    <a href="" className="block text-base font-medium">
                      {faker.products[0].name}
                    </a>
                    <span className="mt-3 text-xs text-white/90">
                      {faker.products[0].category}
                    </span>
                  </div> */}
                </div>
                <div className="mt-5 text-slate-600 dark:text-slate-500">
                  <div className="">
                    <a href="" className="block text-base font-medium">
                      {faker.products[0].name}
                    </a>
                    <span className="mt-3 text-xs text-yellow-500 ">
                      {faker.products[0].category}
                    </span>
                  </div>
                  <div className="flex items-center mt-1 ">
                    <Lucide icon="Link" className="w-4 h-4 mr-2" /> Price: $
                    {faker.totals[0]}
                  </div>
                  <div className="flex items-center mt-2">
                    <Lucide icon="Layers" className="w-4 h-4 mr-2" /> Remaining
                    Stock:
                    {faker.stocks[0]}
                  </div>
                  <div className="flex items-center mt-2">
                    <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />{" "}
                    Status:
                    {faker.trueFalse[0] ? "Active" : "Inactive"}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-5 border-t lg:justify-end border-slate-200/60 dark:border-darkmode-400">
                <Link
                  className="flex items-center mr-auto text-primary"
                  to={`/view-product/${faker.id}`}
                >
                  <Lucide icon="Eye" className="w-4 h-4 mr-1" /> Preview
                </Link>
                <Link
                  className="flex items-center mr-3"
                  to={`/edit-product/${faker.id}`}
                >
                  <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" /> Edit
                </Link>
                <a
                  className="flex items-center text-danger"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setDeleteConfirmationModal(true);
                  }}
                >
                  <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* END: Users Layout */}
        {/* BEGIN: Pagination */}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
          <Pagination className="w-full sm:w-auto sm:mr-auto">
            <Pagination.Link>
              <Lucide icon="ChevronsLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Link active>2</Pagination.Link>
            <Pagination.Link>3</Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronRight" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronsRight" className="w-4 h-4" />
            </Pagination.Link>
          </Pagination>
          <FormSelect className="w-20 mt-3 !box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Dialog
        open={deleteConfirmationModal}
        onClose={() => {
          setDeleteConfirmationModal(false);
        }}
        initialFocus={deleteButtonRef}
      >
        <Dialog.Panel>
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 mx-auto mt-3 text-danger"
            />
            <div className="mt-5 text-3xl">Are you sure?</div>
            <div className="mt-2 text-slate-500">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="w-24 mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              type="button"
              className="w-24"
              ref={deleteButtonRef}
            >
              Delete
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
