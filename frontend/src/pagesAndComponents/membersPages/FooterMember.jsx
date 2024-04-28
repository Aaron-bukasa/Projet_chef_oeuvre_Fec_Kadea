import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/logoFec.svg";

export default function Footer(props) {

    return (
        <div className="lg:py-6 bg-zinc-100 border-t-2 text-primary-blue">
            <div className="grid gap-6 grid-cols-1 grid-rows-[repeat(4,max-content)] gap-6 py-6 px-[5%] sm:text-lg sm:grid-cols-3 sm:grid-rows-[repeat(2,max-content)] mx-auto justify-between xl:px-[7%] xl:tracking-wider">
                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                    <img
                        src={imgLogo}
                        alt="Logo de la fédération"
                        className="w-32 mb-1 md:w-40"
                    />
                    <div>
                        <h2 className="font-semibold text-lg md:text-xl mb-1 sm:mb-4 xl:mb-7">
                            Fédération des entreprises du Congo
                        </h2>
                        <p>
                            10 Av des aviateurs, Gombe,
                            <br />
                            Kinshasa, RDC
                        </p>
                        <p>Téléphone: +243825505783</p>
                        <p>Email: contact@federation-entreprises-congo.fr</p>
                        <p>
                            Lundi – Vendredi: 8h00 – 16h00,
                            <br />
                            Samedi - Dimanche: Fermé.
                        </p>
                    </div>
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 tracking-wider flex sm:justify-center">
                    <ul className="flex flex-col gap-y-1">
                        <h2 className="font-semibold text-lg md:text-xl mb-1 sm:mb-4 lg:text-2xl xl:mb-7">Menu</h2>
                        <li>
                            <Link
                                to="/"
                                className={
                                    props.currentPath === "/"
                                        ? "text-focus-color hover:text-focus-color"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className={
                                    props.currentPath === "/services"
                                        ? "text-focus-color hover:text-focus-color lg:text-xl"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/evenement"
                                className={
                                    props.currentPath === "/faq"
                                        ? "text-focus-color hover:text-focus-color lg:text-xl"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                Evenement
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/communaute"
                                className={
                                    props.currentPath === "/contact"
                                        ? "text-focus-color hover:text-focus-color lg:text-xl"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                Communaute
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={
                                    (props.currentPath === '/formulaireDmd' || props.currentPath === '/formDmd')
                                        ? "text-focus-color hover:text-focus-color lg:text-xl"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                A propos de nous
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/notifications"
                                className={
                                    props.currentPath === "/suiviDmd"
                                        ? "text-focus-color hover:text-focus-color lg:text-xl"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profil"
                                className={
                                    props.currentPath === "/login"
                                        ? "text-focus-color hover:text-focus-color lg:text-xl"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                Profil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logout"
                                className={
                                    props.currentPath === "/login"
                                        ? "text-focus-color hover:text-focus-color lg:text-xl"
                                        : "text-primary-blue hover:text-focus-color lg:text-xl"
                                }
                            >
                                Se deconnecter
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-start-1 col-end-2 row-start-4 row-end-5 sm:col-end-4 sm:row-start-2 sm:row-end-3">
                <div className="border-t-2 pt-5">
                    &copy; 2024 - Fédération des Entreprises du Congo. Tous droits
                    réservés
                </div>
            </div>
        </div>
    );
}
