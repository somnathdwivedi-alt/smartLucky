import {
  collection,
  doc,
  getDoc,
  getDocs,
  type Firestore,
} from "firebase/firestore";
import { getAdminFirestore } from "@/lib/firebase";

const db = (): Firestore => getAdminFirestore() as unknown as Firestore;

/**
 * Live data layer for the Smart Lucky site.
 *
 * Reads the SAME Firestore collections the ALTFT admin panel writes to
 * (projects/smartlucky/{blogs,services,solutions,platforms} and the
 * projects/smartlucky/settings/site document).
 *
 * Falls back to the static seed files in @/data when Firestore is empty or
 * unavailable, so the site always renders. Once an admin publishes content it
 * takes over automatically.
 */

const ROOT = "projects/smartlucky";

/* Smart Lucky admin stores each module as a single document
   projects/smartlucky/<module>/content = { items: [...] }. */
async function fetchModuleItems<T>(module: string): Promise<T[]> {
  try {
    const snap = await getDoc(doc(db(), ROOT, module, "content"));
    return snap.exists() ? (snap.data().items as T[]) || [] : [];
  } catch (err) {
    console.error(`[smartlucky] failed to read module ${module}`, err);
    return [];
  }
}

async function fetchCollection<T>(name: string): Promise<T[]> {
  try {
    const snap = await getDocs(collection(db(), ROOT, name));
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }) as unknown as T);
    return items;
  } catch (err) {
    console.error(`[smartlucky] failed to read ${name}`, err);
    return [];
  }
}

async function fetchDoc<T>(...path: string[]): Promise<T | null> {
  try {
    const snap = await getDoc(doc(db(), path.join("/")));
    return snap.exists() ? (snap.data() as unknown as T) : null;
  } catch (err) {
    console.error(`[smartlucky] failed to read doc ${path.join("/")}`, err);
    return null;
  }
}

export { fetchCollection, fetchDoc, fetchModuleItems, ROOT };
