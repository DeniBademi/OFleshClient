import { Injectable } from '@angular/core';

import { ModalComponent } from '../shared/modal/modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: ModalComponent[] = [];
    private modalActive: boolean = false;

    add(modal: ModalComponent) {
        // ensure component has a unique id attribute
        if (!modal.id || this.modals.find(x => x.id === modal.id)) {
            throw new Error('modal must have a unique id attribute');
        }

        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(modal: ModalComponent) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x === modal);
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);

        if (!modal) {
            throw new Error(`modal '${id}' not found`);
        }

        this.modalActive = true;
        modal.open();
    }

    close() {
        // close the modal that is currently open
        const modal = this.modals.find(x => x.isOpen);
        modal?.close();
        this.modalActive = false;
    }
}