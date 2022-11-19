import type { NextPage } from "next";
import NavWrapper from "../../../Components/DashboardNav/NavWrapper";
import NotificationItem from "../../../Components/NotificationItem";
import { getServerSideProps } from "./../../../Components/NotificationItem/notificationData/index";
<<<<<<< HEAD
import { useRouter } from "next/router";
import { NotificationData } from "./../../../types/complaintTypes.d";

interface NotificationsPageProps {
	notificationData: NotificationData[];
=======
import { useRouter }  from "next/router";
import { useContext, useEffect } from "react";
import { NotificationContext } from "../../../Components/Contexts/NotificationContext";
import { Notification } from "../../../Components/Types";
import { useCookies } from "react-cookie";
import client from "../../../pages/api/Services/AxiosClient";
import { motion } from "framer-motion";

interface NotificationsPageProps {
	notificationData: Notification[];
>>>>>>> cb9013a6791cfbfd7b382643bbc3c11487c21328
}

const NotificationsPage: NextPage<NotificationsPageProps> = () => {
	const { notificationData, markAllNotificationsAsRead } = useContext(NotificationContext);
	const router = useRouter();

	useEffect(() => {
		markAllNotificationsAsRead();
	}, []);

	return (
		<NavWrapper>
			<motion.div initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1, transition: {duration: 0.3}}} className="w-full h-full rounded-[15px] overflow-hidden">
				<div className="py-[16px] pl-[54px] bg-eccblue">
					<p className="text-[24px] font-medium poppinsFont text-white">All Notifications</p>
				</div>
<<<<<<< HEAD
				<div className="pt-[39px] bg-white flex flex-col gap-y-[40px] overflow-y-scroll h-full pb-4">
					{notificationData.map((item, index: number) => (
=======
				<div className="pt-[39px] pb-[49px] bg-white flex flex-col gap-y-[40px] overflow-y-scroll h-[calc(100vh-280px)] custom-scrollbar">
					{notificationData?.map((item: any, index: number) => (

>>>>>>> cb9013a6791cfbfd7b382643bbc3c11487c21328
						<div
							onClick={() => {
								router.push({ pathname: "/dashboard/notificationDetails", query: { id: item._id } });
							}}
						>
							<NotificationItem
								type={item.type}
								key={index}
								title={item.title}
								message={item.message}
								time={item.time}
							/>
						</div>
					))}
				</div>
			</motion.div>
		</NavWrapper>
	);
};
export default NotificationsPage;
