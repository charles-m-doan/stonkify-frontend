import CommonComponents from "./CommonComponents";

export default function() {
	return new SkeletonViewComponents();
}

class SkeletonViewComponents {
	renderSkeletonView() {
		CommonComponents().createPageSkeleton();
		const main = CommonComponents().getMainContentBlock();
		console.log(main);
	}
}
