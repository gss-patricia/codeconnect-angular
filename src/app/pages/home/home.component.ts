import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchTerm: string = '';
  selectedTags: string[] = ['Front-end', 'React', 'Acessibilidade'];

  onSearch(term: string): void {
    // Implementar lógica de busca
    console.log('Searching for:', term);
  }

  removeTag(tag: string): void {
    this.selectedTags = this.selectedTags.filter((t) => t !== tag);
  }

  clearAllTags(): void {
    this.selectedTags = [];
  }
}
