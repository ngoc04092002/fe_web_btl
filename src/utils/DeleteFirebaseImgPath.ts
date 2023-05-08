import { deleteObject, ref } from 'firebase/storage';

import { storage } from '@/pages/firebase';

export function deleteFirebaseImgPath(str: string) {
	let ibe = str.indexOf('%2F');
	let ila = str.indexOf('?');
	let path = str.slice(ibe + 3, ila);
	const desertRef = ref(storage, `images/${path}`);
	deleteObject(desertRef);
}
