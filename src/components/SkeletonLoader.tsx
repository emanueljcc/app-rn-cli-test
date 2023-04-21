import ContentLoader, {Rect} from 'react-content-loader/native';

const SkeletonLoader = () => (
	<>
		{[...Array(6).keys()].map(el => (
			<ContentLoader
				key={el}
				speed={2}
				width={400}
				height={80}
				viewBox="0 0 400 80"
				backgroundColor="#f3f3f3"
				foregroundColor="#bedaf8">
				<Rect x="80" y="8" rx="3" ry="3" width="55%" height="6" />
				<Rect x="80" y="36" rx="3" ry="3" width="40%" height="6" />
				<Rect x="10" y="0" rx="10" ry="10" width="55" height="55" />
			</ContentLoader>
		))}
	</>
);

export default SkeletonLoader;
