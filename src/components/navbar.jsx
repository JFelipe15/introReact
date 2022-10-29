import CentralMenu from "./centralmenu";

function Navbar() {
    return (
        <header class="p-3 text-bg-dark">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <svg
                            class="bi me-2"
                            width="40"
                            height="32"
                            role="img"
                            aria-label="Bootstrap"
                        ></svg>
                    </a>

                    <CentralMenu />

                    <form
                        class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                        role="search"
                    >
                        <input
                            type="search"
                            class="form-control form-control-dark text-bg-dark"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>

                    <div class="text-end">
                        <button
                            type="button"
                            class="btn btn-outline-light me-2"
                        >
                            Login
                        </button>
                        <button type="button" class="btn btn-warning">
                            Sign-up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;